var colors = ['red','orange','blue'];

        function Counter(color){
            this.div = document.createElement("div");           

            this.div.innerHTML=0;

            this.div.style.width = "200px";

            this.div.style.height = "100px";

            this.div.style.backgroundColor = color;

            this.div.style.fontSize = "18px";

            this.div.style.verticalAlign = "middle";

            this.div.style.textAlign = "center";

            this.div.style.lineHeight = "100px";

            this.div.style.borderRadius = "10px"

            this.initializeCounter();

            document.body.appendChild(this.div);
        }

        Counter.prototype.initializeCounter = function(){
            this.div.addEventListener('click',count);
          
            function count(){
                this.innerHTML++;
            }
        }

        for (let color of colors){
            new Counter(color);
        }