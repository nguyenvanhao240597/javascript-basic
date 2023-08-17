
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 0
    },
    {
        id: 4,
        name: 'C++',
        coin: 250
    },
    {
        id: 5,
        name: 'C Sharp',
        coin: 0
    },
    {
        id: 6,
        name: 'Java',
        coin: 0
    },
    {
        id: 7,
        name: 'ReactJS',
        coin: 400
    }

]

// map

console.log('-----------------map:');
var newCourses = courses.map(function(){
    
});
console.log(newCourses[1]);




















// forEach
console.log('-----------------forEach:');
courses.forEach(function (course, index) {
    console.log(index, course);

})




// every
console.log('-----------------every:');
var isfree = courses.every(function (course, index) {
    console.log(index);
    return course.coin === 0;
})

console.log('Every: course.coin === 0',isfree);




// some
console.log('-----------------some:');
var isfree = courses.some(function (course, index){
    console.log(index);
    return course.coin !== 0;
})

console.log('Some: course.coin !== 0 ',isfree);



// find
console.log('-----------------find:');
var _find = 'ReactJS'
console.log(`find: ${_find}`);
var listCorses = courses.find(function (course, index){
    console.log(index);
    console.log(course.name);
    return course.name === `${_find}`;
})
console.log(listCorses)




// filter
console.log('-----------------filter:');
console.log(`filter: ${_find}`);
var listCorses = courses.filter(function (course, index){
    return course.name === `${_find}`;
})
console.log(listCorses)




