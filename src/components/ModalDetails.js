export const ProjectModalHeader = (props) => {
  
    return (
      <div className="project-modal-header">
        <h1>{props.header}</h1>
      </div>
    )
  }

  export const ProjectModalDetails = (props) => {
  
    return (
      <div className="project-modal-details">
        <h4>{props.title}</h4>
        <div className="project-modal-details-div">
            {/* <div className="project-modal-details-first">
            <p>My Role</p>
                <p>My Role</p>
                <p className="one-line">Main Technology</p>
                <p>Other technologies</p>
            </div> */}
            <div className="project-modal-details-second">
                {/* <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Discription</span>
                    </div> 
                    <div>
                        <p>:&nbsp;{props.discription}</p>
                    </div>
                </div> */}
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>My Roll</span>
                    </div> 
                    <div>
                        <p>:&nbsp;{props.role}</p>
                    </div>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Main technology</span>
                    </div> 
                    <p>:&nbsp;{props.main}</p>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Other technologies</span>
                    </div> 
                    <p>:&nbsp;{props.other}</p>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Visit</span>
                    </div> 
                    <a href={props.href}>:&nbsp;click/touch here</a>
                </div>
                
            </div>
            
        </div>
        
      </div>
    )
  }
  export const ProjectModalDesignContent = (props) => {
  
    return (
        <div className="project-modal-details">
        <h4>{props.title}</h4>
        <div className="project-modal-details-div">
            <div className="project-modal-details-second">
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>My Roll</span>
                    </div> 
                    <div>
                        <p>:&nbsp;{props.role}</p>
                    </div>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Main technology</span>
                    </div> 
                    <p>:&nbsp;{props.main}</p>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Other technologies</span>
                    </div> 
                    <p>:&nbsp;{props.other}</p>
                </div>
                <div className="project-modal-details-div">
                    <div className="title-div">
                        <span>Visit</span>
                    </div> 
                    <a href={props.href}>:&nbsp;click/touch here</a>
                </div>
                
                
            </div>
            <div className="project-ss row">
                <div className="col-md-4 col-6">
                    <img src=""></img>
                </div>
                <div className="col-md-4 col-6">
                    
                </div>
                <div className="col-md-4 col-6">
                    
                </div>
            </div>
            <div className="project-ss row">
                <div className="col-md-4 col-6">
                    
                </div>
                <div className="col-md-4 col-6">
                    
                </div>
                <div className="col-md-4 col-6">
                    
                </div>
            </div>
            
        </div>
        
      </div>
    )
  }