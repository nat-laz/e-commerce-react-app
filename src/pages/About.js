import "../style/About.css"

const About = () => {
  return (
    <div className='About'>
      <div id="about"></div>
      
      <div className="about-content">
        <div className="about-text">
        <h1>About</h1>
        <p>Sitting in a calm atmoshere at home 
          or in the office, at any time of the day 
          and even at night, you can go to our 
          website and choose the furniture you 
          like.</p>
        </div>
       <div className="about-img">
        <img src={'https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} alt="" />
       </div>
      </div>

      <div className="about-content">
      <div className="about-img">
        <img src={'https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} alt="" />
      </div>
      <div className="about-text">
        <p id="text-right">After selecting the furniture you are interested in, click the "Buy" button and the product will be in your basket.</p>
        </div>
       
      </div>

      <div className="about-content">
      <div className="about-text">
       
        <p>Our online furniture store was created for the convenience of our customers.</p>
        </div>
       <div className="about-img">
        <img src={'https://images.unsplash.com/photo-1623920996377-9c5cd536143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} alt="" />
       </div>
      </div>
    </div>
  )
}

export default About