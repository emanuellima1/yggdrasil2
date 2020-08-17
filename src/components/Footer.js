import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="bg-light-gray flex justify-center items-center ph2 pv2 f6 mid-gray">
      <span>
        by Emanuel Lima (<span className="fw6">@emanuel_lima1</span>),
        forked from Gustavo Silva's Yggdrasil2 (<span className="fw6">@akafts</span>).
        Imagens são copyright de Ragnarok Online.
      </span>
      <a
        className="pointer mid-gray hover-dark-gray f3 ml3"
        target="_blank"
        href="https://www.github.com/emanuellima1/yggdrasil2"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  )
}

export default Footer
