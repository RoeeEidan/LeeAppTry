// App Component

// Keyboard Component

// Menu Component

// Screen Component
class App extends React.Component{
    constructor(){
        super()
        this.state ={
            classes : [{
                classes : 'btn btn-warning food',
                text : '*** 5 Min ***'
            },{
                classes : 'btn btn-warning food',
                text : '*** 10 Min ***'
            },{ 
                classes : 'btn btn-warning food',
                text : '*** 15 Min ***'
            },{
                classes : 'btn btn-warning food',
                text : '*** 20 Min ***'
            },{
                classes : 'btn btn-warning food',
                text : '*** 30 Min ***'
            },{
                classes : 'btn btn-warning food',
                text : '*** 45 Min ***'
            }],
            special : [
                {
                    text : 'Same-Time',
                    classes: 'btn food sametime2'
                },{
                    text : 'Special',
                    classes : 'btn food special2'
                },{
                    text : 'Allergy',
                    classes: 'btn food allergy2'
                }
            ],
            OrderArray: []
        }
        this.FoodClickFunc = this.FoodClickFunc.bind(this)
    }
    FoodClickFunc(y){
    //     console.log(y);
    //     if(y.includes('All') ){
    //     let x = <li className = 'redd'> {y} </li>
    //     this.state.OrderArray.push(x)
    //     this.setState({
    //        OrderArray: this.state.OrderArray   
    //     })
    // }else if(y.includes('Spe')){
    //     let x = <li className = 'greenn'> {y} </li>
    //     this.state.OrderArray.push(x)
    //     this.setState({
    //     OrderArray: this.state.OrderArray   
    //     })
    // }else if(y.includes('Sam')){
    //     let x = <li className = 'bluee'> {y} </li>
    //     this.state.OrderArray.push(x)
    //     this.setState({
    //     OrderArray: this.state.OrderArray   
    //     })
    // }else if(y.includes('***')){
    //     let x = <li className = 'purplee'> {y} </li>
    //     this.state.OrderArray.push(x)
    //     this.setState({
    //     OrderArray: this.state.OrderArray   
    //     })
    // }
    
    // else{
    //         let x = <li> {y} </li>
    //         this.state.OrderArray.push(x)
    //         this.setState({
    //         OrderArray: this.state.OrderArray
    //         })
    //     }
    }
    render(){
        const DisplayTimeArr =[];
        const DisplayFoodArr =[];
        const DisplayOtherArr =[];
        for(let i =0; i < this.state.classes.length; i++){
            DisplayTimeArr.push(<TimeButton text ={this.state.classes[i].text} handleClickButton = {this.FoodClickFunc}/>)
        }
        for(let i = 0; i < FoodMenu.length; i++){
            DisplayFoodArr.push(<FoodButton text = {FoodMenu[i].name} handleClickButton = {this.FoodClickFunc} handleClickButton = {this.FoodClickFunc}/>)
        }
        for(let i =0; i < this.state.special.length; i++){
            DisplayOtherArr.push(<GeneralButton classes = {this.state.special[i].classes} text = {this.state.special[i].text} handleClickButton = {this.FoodClickFunc}/>)
        }
    
    
        return( // when render method runs, it spits out a JSX description of what the html will look like. Then React.Dom updates the view.
        <div className = 'row'>
            {/*Order = {this.state.OrderArray}*/}
            <NewOrder Order = {this.state.OrderArray}/>
            {DisplayTimeArr}
            {DisplayFoodArr}
            {DisplayOtherArr}
            <KeyBoard />
        </div>
  
        )
    }
};

class NewOrder extends React.Component{
    constructor(){
        super()
        this.state = {
            neworderitem:'' ,
            orderlist:[]
        }
        // this.handleClick = this.handleClick.bind(this)
    };
    render(){
        // let OrderArr = [];
        // if(this.props.neworderitem){
        //     setState({
        //     neworderitem: this.props.neworderitem,
        //     orderlist: this.state.orderlist.push(this.state.neworderitem)
        // })
        //     let OrderArr = [];
        //     for(let i = 0; i < this.state.orderlist.length; i++ ){
        //         OrderArr.push(<li> {this.state.neworderitem} </li>)
        // }
        // }
        // for(let i = 0; i < this.state.orderlist.length; i++ ){
        //     OrderArr.push(<li> {this.state.neworderitem} </li>)
        // }


    const title = 'New Order';
        return(
                <div className = 'col-md-4 texterea'>
                    <h1 >{title}</h1>
                    <ul className = 'orderlist' >
                        {this.props.Order}
                    </ul>
                    <div className = 'tablenumber'>
                        Table Number: <div className = 'tableinput' ></div>
                    </div> 
                    <button onClick={this.handelClick} type="button" className="btn SendButton" id ="sendbutton">Send</button>              
                </div>
        )
    }
}
class TimeButton extends React.Component{

    render(){

        return(
            <button onClick = {() => {this.props.handleClickButton(this.props.text)}} type="button" className="btn food time">
                        {this.props.text}
            </button>
        )
    }
}

class FoodButton extends React.Component{
    constructor(){
        super()
        this.state = {}
        // this.handleClickButton = this.handleClickButton.bind(this);
    //  this.{this.props.clickfunc} = this.{this.props.clickfunc}.bind(this)
    }
    // handleClickButton(){
    //     console.log(this.props.text);
    //     <NewOrder neworderitem = {this.props.text} />
    // }
    // {this.props.clickfunc}

    render(){
        let x = this.props.text;
        return(
            <button onClick = {() => {this.props.handleClickButton(this.props.text)}} type="button" className="btn food">
                        {this.props.text}
            </button>
        )
    }
}

class GeneralButton extends React.Component{

    render(){

        return(
            <button onClick = {() => {this.props.handleClickButton(this.props.text)}} type="button" className={this.props.classes}>
                        {this.props.text}
            </button>
        )
    }
}

class KeyBoard extends React.Component{
    render(){

        return(
              <div className = 'keyboreddiv container'>
            
                <ul className="keyboard">
                        <li className="symbol"><span class="off">1</span></li>
                        <li className="symbol"><span class="off">2</span></li>
                        <li className="symbol"><span class="off">3</span></li>
                        <li className="symbol"><span class="off">4</span></li>
                        <li className="symbol"><span class="off">5</span></li>
                        <li className="symbol"><span class="off">6</span></li>
                        <li className="symbol"><span class="off">7</span></li>
                        <li className="symbol"><span class="off">8</span></li>
                        <li className="symbol"><span class="off">9</span></li>
                        <li className="symbol"><span class="off">0</span></li>
                        <li className="letter">q</li>
                        <li className="letter">w</li>
                        <li className="letter">e</li>
                        <li className="letter">r</li>
                        <li className="letter">t</li>
                        <li className="letter">y</li>
                        <li className="letter">u</li>
                        <li className="letter">i</li>
                        <li className="letter">o</li>
                        <li className="letter">p</li>
                        <li className="undo">Undo</li>
                        <li className="letter">a</li>
                        <li className="letter">s</li>
                        <li className="letter">d</li>
                        <li className="letter">f</li>
                        <li className="letter">g</li>
                        <li className="letter">h</li>
                        <li className="letter">j</li>
                        <li className="letter">k</li>
                        <li className="letter">l</li>
                        <li className="back">Back</li>
                        <li className="letterface"></li>
                        <li className="letter">z</li>
                        <li className="letter">x</li>
                        <li className="letter">c</li>
                        <li className="letter">v</li>
                        <li className="letter">b</li>
                        <li className="letter">n</li>
                        <li className="letter">m</li> 
                        <li className="new-line">N/L</li>
                    <li className="space lastitem">&nbsp;</li>
                </ul>
            
        </div>
        )
    }
}


// ReactDOM.render(<NewOrder />, document.getElementById('app'));
ReactDOM.render(
<App />
, document.getElementById('app')
);
