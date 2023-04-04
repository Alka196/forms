import React , {useState}from 'react';
//import Navbar from '../Navbar/Navbar';
import "./Form.css";

function Form() {
    const [selectedOptionQ1, setSelectedOptionQ1] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOptionQ1(event.target.value);
    }

    const [selectedOptionQ2, setSelectedOptionQ2] = useState('');

    const handleOptionChange2 = (event) => {
      setSelectedOptionQ2(event.target.value);
    }
    const [selectedOptionQ3, setSelectedOptionQ3] = useState('');

    const handleOptionChange3 = (event) => {
      setSelectedOptionQ3(event.target.value);
    }
    const [selectedOptionQ4, setSelectedOptionQ4] = useState('');

    const handleOptionChange4 = (event) => {
      setSelectedOptionQ4(event.target.value);
    }
   

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected file, such as upload it to a server
    console.log(selectedFile);
  };

    return(
        <div id="main-form">
            
                <div id="sec">
                <h7 style={{margin:"10px", padding:"10px"}}>General Information</h7>
                <form>
                    <div id="main-formdetails" style={{backgroundColor:"white"}}>
                        
                        {/* <h1>General Information</h1> */}
                        <div className="Qdiv">
                        <h9>Question 1</h9><hr />
                        <label htmlFor="dropdown" className="required"><h9><bold> Please select your sourcing option: </bold></h9></label><br></br>
                            <select id="dropdown" value={selectedOptionQ1} onChange={handleOptionChange} style={{width:"250px",borderRadius:"5px",height:"30px"}}>
                                <option value="">Choose sourcing</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <br></br>
                            </div><br></br>
                            <div className="Qdiv">
                            <h9 >Question 2</h9><hr />
                        <label htmlFor="dropdown" className="required">Please select your sourcing option:</label><br></br>
                            <select id="dropdown" value={selectedOptionQ2} onChange={handleOptionChange2} style={{width:"250px",borderRadius:"5px",height:"30px"}}>
                                <option value="">Choose users range</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <br></br>
                            </div><br></br>
                            <div className="Qdiv">
                            <h9>Question 3</h9><hr />
                        <label htmlFor="dropdown" >Provide an expected spend:</label><br></br>
                            <select id="dropdown" value={selectedOptionQ3} onChange={handleOptionChange3} style={{width:"250px",borderRadius:"5px",height:"30px"}}>
                                <option value="">Choose expense range</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <br></br>
                            </div>   </div>
                            </form>                         
                         
                        
                    </div>
                    <div id="sec">
                    <h7 style={{margin:"10px", padding:"10px"}}>Product Feedback</h7>
                <form>
                    <div id="main-formdetails2" style={{backgroundColor:"white"}}>
                        
                        {/* <h1>General Information</h1> */}
                        <div className="Qdiv">
                        <h9 >Question 4</h9><hr />
                        <h9>Please select your sourcing option: </h9><br></br>
                        <label>
                        <div style={{width:"150px", border:"1px solid black",borderBlockColor:"ActiveBorder", padding:"5px",borderRadius:"10px"}}> <input type="radio" name="option"  defaultValue="option1" />
                               &nbsp;&nbsp;&nbsp;&nbsp;Yes</div>
                            </label>&nbsp;&nbsp;
                            <label>
                            <div style={{width:"150px", border:"1px solid black",borderBlockColor:"ActiveBorder", padding:"5px", borderRadius:"10px"}}> <input type="radio" name="option"  defaultValue="option1" />
                               &nbsp;&nbsp;&nbsp;&nbsp;No</div>
                            </label>
                            
                            </div><br></br>
                            <div className="Qdiv">
                            <h9>Question 5</h9><hr />
                        <label htmlFor="dropdown" className="required">What type of PII will the vendor have access to?</label><br></br>
                            <select id="dropdown" value={selectedOptionQ4} onChange={handleOptionChange4}style={{width:"250px",borderRadius:"5px",height:"30px"}}>
                                <option value="">Choose one or more PII type</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <br></br>
                            </div><br></br>
                            <div className="Qdiv">
                            <h9>Question 6</h9><hr />
                        <h9>Will the vendor have access to AWS Account?</h9><br></br>
                        <label>
                               <div style={{width:"150px", border:"1px solid black",borderBlockColor:"ActiveBorder", padding:"5px",borderRadius:"10px"}}> <input type="radio" name="option"  defaultValue="option1" />
                               &nbsp;&nbsp;&nbsp;&nbsp;Yes</div>
                            </label>&nbsp;&nbsp;
                            <label>
                            <div style={{width:"150px", border:"1px solid black",borderBlockColor:"ActiveBorder", padding:"5px", borderRadius:"10px"}}> <input type="radio" name="option"  defaultValue="option1" />
                               &nbsp;&nbsp;&nbsp;&nbsp;No</div>
                            </label>
                            <br></br>
                            </div> <br></br> 
                             </div>
                            </form>                       
                         
                    </div>
                    <div id="sec">
                    <h7 style={{margin:"10px", padding:"10px"}}>Upload Documents</h7>
                <form>
                    <div id="main-formdetails3" style={{backgroundColor:"white"}}>
                        
                        {/* <h1>General Information</h1> */}
                        <div className="Qdiv">
                        <h9>Question 7</h9><hr />
                        <form onSubmit={handleSubmit}>
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={(event) => event.preventDefault()}
                                        style={{  padding: 20 }}
                                    >
                                        {selectedFile ? (
                                        <div>{selectedFile.name}</div>
                                        ) : (
                                        <div id="drag">Drag and Drop File or Browse</div>
                                        )}
                                        <input type="file" onChange={handleFileInput} style={{ display: 'none' ,borderRadius:"10px"}} />
                                    </div>
                                    <div>
                                        <button type="submit" disabled={!selectedFile}>
                                        Upload
                                        </button>
                                    </div>
                                    </form>
                            <br></br>
                            </div>
                           
                            </div>
                            </form>
                  
                  

                </div>
                   
                
              
           
        </div>
    )
}


export default Form;