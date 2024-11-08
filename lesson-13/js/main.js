// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

// 1. Rectangle nomli class yarating:

// Private properties:

// width
// height

// Methods:

// getWidth()
// getHeight()
// setSides(a, b)
// perimeter() - getter
// area() - getter

// Class

// 1. Triangle nomli class yarating:

// Private properties:

// leftSide
// rightSide
// width

// Methods:

// getLeftSide()
// getRightSide()
// getWidth()
// setSides(a, b, c)

// 2. Employee nomli class yarating:

// Private properties

// id
// firstName
// lastName
// salary

// Methods

// getId();
// getFirstName();
// getLastName();
// getSalary();
// setId(id);
// setFirstName(fName);
// setLastName(lName);
// setSalary(s);

// getFullName();
// getAnnualSalary(); // salary * 12
// raiseSalary(percent);

// 3. CustomDate nomli class yarating:

// Private properties

// day
// month
// year

// Methods

// getDay();
// getMonth();
// getYear();
// setDay();
// setMonth();
// setYear();

// getISOdate(); // 12-05-2023

// 4. Time nomli class yarating:

// Private properties

// hour
// minute
// second

// Methods

// getHour()
// getMinute()
// getSecond()
// setHour();
// setMinute();
// setSecond();

// nextSecond(); 06:20:10 -> 06:20:11
// previousSecond(); 06:20:10 -> 06:20:09

// Inheritance

// 5. Superclass Shape -> sub classes (Circle, Rectangle)

// Shape

// Private properties

// color -> string
// filled -> boolean

// Methods

// getColor();
// setColor();
// isFilled();
// setFilled();

// Circle

// Private properties

// radius

// Methods

// getRadius();
// setRadius();

// getArea();
// getPerimeter();

// Rectangle

// Private properties

// width
// height

// Methods

// getWidth();
// setWidth();
// getHeight();
// setHeight();

// getArea();
// getPerimeter();

// 6. Person - superclass, Student and Employee - subclasses;
// Person -> Student and Employee

// Person

// Private properties

// name
// address

// Methods

// getName()
// setName()
// getAddress()
// setAddress()

// Student

// Private properties

// faculty
// year
// university

// Methods

// getFaculty
// getYear
// getUniversity
// setFaculty
// setYear
// setUniversity

// Employee

// Private properties

// salary
// work

// Methods

// getSalary
// getWork
// setSalary
// setWork

// 7. Animal - superclass, others - subclasses

// Animal -> Mammal and Fish
// Mammal -> Cat and Dog
// Fish -> Whale and Shark

// Animal

// Properties

// name
// speed
// weight

// Mammal

// Private properties

// legs

// Methods

// getLegs();
// setLegs();

// Cat

// Methods

// getSound(); // Meow

// Dog

// Methods

// getSound(); // Woof

// Fish

// Private properties

// size

// Methods

// getSize();
// setSize();

// Whale

// Methods

// getSound(); // "Poof"

// Shark

// Methods

// getSound(); // "Sheef"

// Static keyword

// 8. Quyidagi static metodlarni yarating:

// Object -> customKeys, customValues, customEntries;
// Number -> customIsInteger;
// Array -> customIsArray;

// 9.Array classiga quyidagi static metodlarni qo’shing;

// isNumberArray -> constructorga kiritilgan massivni elementlarini hammasi raqam ekaniga tekshiradi, aks holda xato berishi kerak;
// sum (arr) -> massiv elementlari yig'indisi;
// max (arr) -> massive eng katta elementi;
// min (arr) -> massiv eng kichik elementi;

// Polymorphism and inheritance

// 10. Person - superclass, RichPerson - subclass

// Person

// Properties

// housePrice
// housesNumber
// carPrice
// carsNumber
// bankAccount

// Method

// getWealth();

// RichPerson

// companyPrice
// companiesNumber
// investigation

// Method

// getWealth(); // barcha boyliklarini qo'shib chiqarsin, olgan merosi ham qo'shilsin.
