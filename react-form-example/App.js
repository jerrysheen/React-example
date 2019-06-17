import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            isVagetarian:false,
            location:""
        }
        this.handleChange = this.handleChange.bind(this)
        //this.handleSubmit = this.handleSubmit(this)
    }
    
    handleChange(event){
        const{name, value ,type,checked} = event.target
        type==="checkbox"? this.setState({[name]:checked}) : this.setState({[name]:value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input  type="text"
                            placeholder="First Name" 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange}/>
                    <br />
                    <input  type="text"
                            placeholder="Last Name" 
                            name="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            />
                    <br />
                    <input  placeholder="Age" 
                            name="age" 
                            value={this.state.age}
                            onChange={this.handleChange}
                            />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>Male
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>Female
                    
                    
                    {/* Create select box for location here */}
                    <br />
                    <select name="location" onChange={this.handleChange}>
                        <option value="beijing">beijing</option>
                        <option value="shanghai">shanghai</option>
                        <option value="guangdong">guangdong</option>
                    </select>
                    
                    {/* Create check boxes for dietary restrictions here check boxes for vegetarian, kosher, lactose free */}
                    <br />
                    <input type="checkbox" name="isVagetarian" checked={this.state.isVagetarian} onChange={this.handleChange}/>vegetarian
                    <br />
                    <input type="checkbox"name="isKosher"/>kosher
                    <br />
                    <input type="checkbox"name="isLactose free"/> lactose free
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {`Vagetarian: ${this.state.isVagetarian} `}
                </p>
            </main>
        )
    }
}

export default App
