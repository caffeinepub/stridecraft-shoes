import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Nat64 "mo:core/Nat64";

actor {
  type ProductId = Text;
  type SubmissionId = Nat;

  type Product = {
    id : ProductId;
    name : Text;
    description : Text;
    category : Text;
    price : Nat64;
    sizes : [Nat];
    images : [Text];
    available : Bool;
  };

  type Submission = {
    id : SubmissionId;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type Filter = {
    category : ?Text;
    minPrice : ?Nat64;
    maxPrice : ?Nat64;
  };

  module Product {
    public func compareByPrice(p1 : Product, p2 : Product) : Order.Order {
      Nat64.compare(p1.price, p2.price);
    };
  };

  let products = Map.empty<ProductId, Product>();
  let submissions = Map.empty<SubmissionId, Submission>();

  var nextSubmissionId : SubmissionId = 1;

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async SubmissionId {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields must be filled");
    };

    let submission : Submission = {
      id = nextSubmissionId;
      name;
      email;
      message;
      timestamp = 0;
    };

    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
    submission.id;
  };

  public query ({ caller }) func getFilteredProducts(
    category : ?Text,
    minPrice : ?Nat64,
    maxPrice : ?Nat64,
    sortByPrice : ?Bool,
  ) : async [Product] {
    var productIter = products.values();

    switch (category) {
      case (null) {};
      case (?cat) {
        productIter := productIter.filter(
          func(p) { p.category == cat }
        );
      };
    };

    switch (minPrice) {
      case (null) {};
      case (?minP) {
        productIter := productIter.filter(
          func(p) { p.price >= minP }
        );
      };
    };

    switch (maxPrice) {
      case (null) {};
      case (?maxP) {
        productIter := productIter.filter(
          func(p) { p.price <= maxP }
        );
      };
    };

    let filteredProducts = productIter.toArray();

    switch (sortByPrice) {
      case (?true) {
        filteredProducts.sort(Product.compareByPrice);
      };
      case (?false) {
        filteredProducts.sort(Product.compareByPrice).reverse();
      };
      case (null) {
        filteredProducts;
      };
    };
  };

  public query ({ caller }) func getProduct(id : ProductId) : async Product {
    switch (products.get(id)) {
      case (null) {
        Runtime.trap("Product could not be found");
      };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };
};
