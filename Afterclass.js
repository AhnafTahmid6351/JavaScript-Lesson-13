var choice = prompt("Welcome to Area Calculator. \n Please enter your choice. \n1.Perimeter of Rectangle. \n2.Perimeter of triangle. \n3.Perimeter of Parallelogram.");
if (choice == '1') {
    var l = prompt('enter the length')
    var b = prompt('enter the breadth')
    var result = 2*Number(l) + 2*Number(b)
    alert ('The perimeter is ' + result)
}
if (choice == '2') {
    var h = prompt('enter side 1')
    var b = prompt('enter the base')
    var c = prompt('Enter side 2')
    var result = Number(h) + Number(b) + Number(c)
    alert ('The perimeter is ' + result)
}
if (choice == '3') {
    var h = prompt('enter length')
    var cb = prompt('enter length 2')
    var result = 2*Number(h) + 2*Number(cb)
    alert ('The area is ' + result)
}