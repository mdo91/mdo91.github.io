import { NextResponse } from 'next/server'

// Add occupation mapping
const occupationMapping: Record<string, string> = {
  'civil_engineer': 'مهندس مدني',
  'architect': 'مهندس معماري',
  'site_engineer': 'مهندس موقع',
  'site_manager': 'مدير موقع',
  'other': 'أخرى'
}

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    console.log('Received form data:', formData)
    
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe8njlgXqaPaCAADOa96NZf46cMLSXXMVDckfSRxkAddVI8cQ/formResponse"
    
    // Convert occupation to Arabic if it's in English
    const occupationValue = occupationMapping[formData.occupation] || formData.occupation
    
    const params = new URLSearchParams({
      "entry.1245777022": formData.firstName,
      "entry.1721748506": formData.lastName,
      "entry.682866909": occupationValue,
      "entry.1937647017": formData.email,
      "entry.469731828": formData.governate,
      "entry.1518853222": formData.university,
      "entry.728832931": formData.telegramUsername,
      "entry.644378863": formData.suggestions,
    })
    
    console.log('Sending to Google Forms:', params.toString())
    
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
      redirect: 'follow', // Follow redirects
    })

    // Google Forms always returns a 200 status code, even on success
    // We need to check the response URL to determine if it was successful
    const responseUrl = response.url
    console.log('Response URL:', responseUrl)

    if (responseUrl.includes('formResponse')) {
      return NextResponse.json({ success: true })
    } else {
      console.error('Form submission failed. Response URL:', responseUrl)
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 