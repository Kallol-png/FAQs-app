import React, { useState } from 'react'
import {faqsData} from './Data'
import style from './faqs.module.css'
import FAQ from './FAQ';

const FAQS = () => {
    const[faqs, setFaqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <div>
        <h2>FAQs</h2>
        {faqs.map((faq)=><FAQ key={faq.id} {...faq}/>)}
        </div>
      </section>
    </main>
  )
}

export default FAQS
