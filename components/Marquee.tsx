import React from 'react';;
import LogoWall from '@/app/blocks/Components/LogoWall/LogoWall';

function Marquee() {
  const logoImgs = [
    { imgUrl: '/java.png', altText: 'Java Logo' },
    { imgUrl: '/python.png', altText: 'Python Logo' },
    { imgUrl: '/html.png', altText: 'HTML Logo' },
    { imgUrl: '/css.png', altText: 'HTML Logo' },
    { imgUrl: '/js.png', altText: 'JavaScript Logo' },
    { imgUrl: '/node.png', altText: 'CSS Logo' },
    { imgUrl: '/mongo.png', altText: 'CSS Logo' },
    { imgUrl: '/mysql.png', altText: 'CSS Logo' },
    { imgUrl: '/cpp.png', altText: 'CSS Logo' },
    { imgUrl: '/react.png', altText: 'CSS Logo' },
    { imgUrl: '/ts.png', altText: 'CSS Logo' },
    { imgUrl: '/canva.png', altText: 'CSS Logo' },

  ];

  return (
    <>
    <div style={{height: '', width: '100%', position: 'relative'}}
    className=''>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>
    
    </>
  );
}

export default Marquee;
