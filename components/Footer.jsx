import React from 'react'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <div className='w-full mt-96 -mb-44 flex gap-2 justify-center'>
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} size="1x" />
      </a>
      <a href="https://www.instagram.com/a2sv_org/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A71497247&keywords=a2sv%20%7C%20africa%20to%20silicon%20valley&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=1&searchId=b2d4cc8d-cdb8-4357-a7ad-d0c2a9e9272f&sid=2aJ&spellCorrectionEnabled=true" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
    </div>
  )
}

export default Footer