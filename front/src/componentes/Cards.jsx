import Card from './Card';

const Cards = ({characters})=> {
   return(
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image, onClose})=>{
               return  <Card
               key={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin.name}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }

      </div>
   )
};

export default Cards;
