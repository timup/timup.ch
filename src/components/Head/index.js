import React from 'react'
import Helmet from 'react-helmet'
import Thumbnail from 'Static/thumbnail/thumbnail.png'

import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'Data'

export const Head = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const organizationStructuredData = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
      }`

  return (
    <Helmet>
      <html lang="en" dir="ltr" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}${location}/?ref=timup.ch`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />

      <script type="application/ld+json">{organizationStructuredData}</script>
    </Helmet>
  )
}
