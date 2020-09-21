function Video({ name, coverImage, url, type, client }) {
    return (
      <div className="container">
        <p>{name}</p>
        <img src={coverImage} />
        <p>{type}</p>
        <p>{client}</p>
        
        <style jsx>{`
          .container {
            cursor: pointer;
            height: 453px;
            margin-bottom: 48px;
          }
        `}</style>
      </div>
    )
  }
  
  export default Video