import backgroundImage from '../../assets/img/background-header.png';
export function Header () {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
       
        
      >
        <p>Encontre livros que seja a sua cara!</p>
        <p>Lorem ipsum</p>
      </div>
    );
}

