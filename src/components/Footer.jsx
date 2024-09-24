const Footer = () => {
    return (
      <div className="footer bg-white shadow mt-20" id="social">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="py-4">
            &copy; Copyright by <span className="font-bold">Ian/Dastin</span>  
          </p>        
          <div className="social-footer flex items-center gap-7">
            <a href="https://www.facebook.com/share/4yJ1ZApFrCyTfBKC/?mibextid=qi2Omg"><i className="ri-facebook-circle-fill text-2xl"></i></a>
            <a href="https://www.instagram.com/dastindgg_?igsh=MWRnOTNqbDNuN2l0eg=="><i className="ri-instagram-fill text-2xl"></i></a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer