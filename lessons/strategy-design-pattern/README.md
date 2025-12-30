GameController: Duck (any)

// Aggregation
Duck Class: Template of IS-A Relationship
protected flyBahavior: FlyBehavior; (from interface -> HAS A RELATIONSHIP)
protected quackBehavior: QuackBehavior; (from interface)

Decoy
BabyDuck
MallardDuck

Controller
performQuack(duck: Duck)
performFly(duck: Duck)

FlyBehavior
QuackBehavior
