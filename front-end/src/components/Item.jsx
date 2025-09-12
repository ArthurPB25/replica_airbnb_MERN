import React from 'react'

const Item = () => {
  return <a  href='/' className='flex flex-col gap-2'>
    <img src="https://destinosnotaveis.com.br/wp-content/uploads/2019/10/praia-das-conchas-cabo-frio.jpg" alt=""  className='aspect-square object-cover rounded-xl'/>
    <div className='flex flex-col gap-3'>
      <h3 className='text-xl font-semibold'>Cabo frio, Rio de janeiro</h3>
      
      <p className='truncate text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum facere accusamus, quisquam excepturi voluptas neque dicta ea voluptatum ad repellendus dignissimos reprehenderit sed illum dolor deserunt suscipit debitis corrupti quasi?</p>
      <p><span className='font-semibold'>R$550,00 por noite</span></p>
    </div> 
  </a>
  
}

export default Item