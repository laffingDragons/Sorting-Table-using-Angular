var myApp = angular.module("myModule",[]);
                   myApp.controller("myController", function(){
                       
                       this.employee =  [
                { name: "Akshay", dateOfBirth : new Date("November 23, 1980"), gender: "Male", salary: 55000 },
                { name: "Pratik", dateOfBirth: new Date("May 05, 1970"), gender: "Male", salary: 68000 },
                { name: "Aditya", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
                { name: "Kunal", dateOfBirth: new Date("October 27, 1979"), gender: "Male", salary: 53000 },
                { name: "Pooja", dateOfBirth: new Date("December 30, 1983"), gender: "Female", salary: 69000 },
                { name: "Snehal", dateOfBirth: new Date("April 10, 1993"), gender: "Female", salary: 64000 }           
            ];
                   })