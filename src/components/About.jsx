import React from 'react'
import {motion, useViewportScroll, useTransform } from 'framer-motion'
import { resolvePath } from 'react-router-dom'



const About = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 2], [0.7, 2]);
  return (
    <div className='container col-12'>
      <blockquote className="blockquote text-right">      
      <motion.p className='p-5 my-md-5'
      initial={{
        x:-1000,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }} 
      transition={{
        delay: 0.2,
        duration: 1,
        type: 'tween'
      }}
      >
        Landscape painting, also known as landscape art, is the depiction of natural scenery such as mountains, valleys, trees, rivers, and forests, especially where the main subject is a wide view—with its elements arranged into a coherent composition. In other works, landscape backgrounds for figures can still form an important part of the work. Sky is almost always included in the view, and weather is often an element of the composition. Detailed landscapes as a distinct subject are not found in all artistic traditions, and develop when there is already a sophisticated tradition of representing other subjects.
      <br/>
      <br/>

      Two main traditions spring from Western painting and Chinese art, going back well over a thousand years in both cases. The recognition of a spiritual element in landscape art is present from its beginnings in East Asian art, drawing on Daoism and other philosophical traditions, but in the West only becomes explicit with Romanticism.
      <br/>
      <br/>

      Landscape views in art may be entirely imaginary, or copied from reality with varying degrees of accuracy. If the primary purpose of a picture is to depict an actual, specific place, especially including buildings prominently, it is called a topographical view. Such views, extremely common as prints in the West, are often seen as inferior to fine art landscapes, although the distinction is not always meaningful; similar prejudices existed in Chinese art, where literati painting usually depicted imaginary views, while professional artists painted real views.
      <br/>
      <br/>

      The word "landscape" entered the modern English language as landskip (variously spelt), an anglicization of the Dutch landschap, around the start of the 17th century, purely as a term for works of art, with its first use as a word for a painting in 1598. Within a few decades it was used to describe vistas in poetry, and eventually as a term for real views. However the cognate term landscaef or landskipe for a cleared patch of land had existed in Old English, though it is not recorded from Middle English.
      </motion.p>
      <motion.p
      initial={{
        x:1000,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }} 
      transition={{
        delay: 0.2,
        duration: 1,
        type: 'tween'
      }}>
      <footer class="blockquote-footer p-5 ">Landscape painting - <cite title="Source Title">www.wikipedia.org</cite></footer>
      </motion.p>
      
      </blockquote>

      <motion.div className='container row col-12'
        style={{ scale }}
      >
        <motion.img className='col-4' src='/img/one.jpeg' alt=''
          style={{
            scaleY: scrollYProgress
          }}
        />
        <motion.img className='col-4' src='/img/two.jpg' alt=''
          style={{
            scaleY: scrollYProgress
          }}
        />
        <motion.img className='col-4' src='/img/three.jpg' alt=''
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>

      

      
    </div>
  )
}

export default About