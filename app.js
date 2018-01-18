var app = angular.module('myApp',[]);
app.controller('mainCtrl',function($scope, $window, $timeout){
    $scope.array=[];
    $scope.score=0;
    var initScore=0;



    $scope.getVal=function(){



        var value=+$scope.inputVal;
        $scope.array=[];
        if(!Number.isInteger(value)){

            $scope.inputAlert="Please input integer number only";
        }else{

            $scope.inputAlert=null;
        }
        $scope.inputVal=null;

        for(let i =0;i<value;i++){
            $scope.array[i]=i;
        }
        $scope.flag=value;

    }
    $scope.remove=function(a){

        if(a%2==0){
            $scope.score+=5;
        }else{
            $scope.score+=10;
        }

        if(initScore!=$scope.score){

            $("#sc").fadeOut().fadeIn();
            initScore=$scope.score
        }

        $scope.array.splice(a,1);
        $scope.flag--;

    }




})