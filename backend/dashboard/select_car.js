/*function selectedRow(){
                
    var index,
        table = document.getElementById("carsTable");

    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
             // remove the background from the previous selected row
            if(typeof index != "undefined"){
               table.rows[index].classList.toggle("selected");
            }
            // get the selected row index
            index = this.rowIndex;
            // add class selected to the row
            this.classList.toggle("selected");
            car_detail(cars[index]);

            
            
         };
    }
    
}

car_detail(cars[0]);
selectedRow();*/




function selectedRow(){
                
    var index , table = document.getElementById("carsTable");

    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
             // remove the background from the previous selected row
            if(typeof index != "undefined"){
               table.rows[index-1].classList.toggle("selected");
            }
            // get the selected row index
            index = this.rowIndex;
            // add class selected to the row
            this.classList.toggle("selected");
            car_detail(cars[index-1]);       
        };
    }
}

//car_detail(cars[0]);
//selectedRow();