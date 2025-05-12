"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/components/language-provider"

// Add occupation mapping
const occupationMapping: Record<string, string> = {
  'civil_engineer': 'مهندس مدني',
  'architect': 'مهندس معماري',
  'site_engineer': 'مهندس موقع',
  'site_manager': 'مدير موقع',
  'other': 'أخرى'
}

export function FormSection() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    governate: "",
    university: "",
    telegramUsername: "",
    suggestions: "",
  })
  const [success, setSuccess] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, occupation: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Convert occupation to Arabic
      const occupationValue = occupationMapping[formData.occupation] || formData.occupation

      // Google Form submission URL
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe8njlgXqaPaCAADOa96NZf46cMLSXXMVDckfSRxkAddVI8cQ/formResponse"
      
      const formDataObj = {
        "entry.1245777022": formData.firstName,
        "entry.1721748506": formData.lastName,
        "entry.682866909": occupationValue,
        "entry.1937647017": formData.email,
        "entry.469731828": formData.governate,
        "entry.1518853222": formData.university,
        "entry.728832931": formData.telegramUsername,
        "entry.644378863": formData.suggestions,
      }

      // Submit using fetch with no-cors so user is not redirected
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataObj).toString(),
      })

      toast({
        title: t("successTitle"),
        description: t("successMessage"),
      })

      setIsSubmitting(false)
      setIsTransitioning(true)
      setTimeout(() => {
        setSuccess(true)
        setIsTransitioning(false)
      }, 400)

      setFormData({
        firstName: "",
        lastName: "",
        occupation: "",
        email: "",
        governate: "",
        university: "",
        telegramUsername: "",
        suggestions: "",
      })

    } catch (error) {
      setIsSubmitting(false)
      toast({
        title: t("errorTitle"),
        description: t("errorMessage"),
        variant: "destructive",
      })
      console.error("Error submitting form:", error)
    }
  }

  return (
    <section id="apply-form" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{t("joinNetwork")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("registerInterest")}</p>
          </div>

          {success ? (
            <div className={`flex flex-col items-center justify-center bg-gradient-to-b from-purple-100/60 via-white to-white p-10 rounded-lg shadow space-y-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#d1fae5" />
                <path d="M8 12l2 2l4-4" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div className="text-2xl font-bold text-gray-900">{t("formSuccessTitle")}</div>
              <div className="text-gray-500 italic text-center text-lg max-w-xl">{t("formSuccessDesc")}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-6 bg-gradient-to-b from-purple-100/60 via-white to-white p-8 rounded-lg shadow transition-all duration-500 ${isTransitioning ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    {t("firstName")} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    {t("lastName")} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">
                  {t("occupation")} <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.occupation} onValueChange={handleSelectChange} required>
                  <SelectTrigger id="occupation">
                    <SelectValue placeholder={t("selectOccupation")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="civil_engineer">{t("civilEngineer")}</SelectItem>
                    <SelectItem value="architect">{t("architect")}</SelectItem>
                    <SelectItem value="site_engineer">{t("siteEngineer")}</SelectItem>
                    <SelectItem value="site_manager">{t("siteManager")}</SelectItem>
                    <SelectItem value="other">{t("other")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {t("email")} <span className="text-red-500">*</span>
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="governate">
                  {t("governate")} <span className="text-red-500">*</span>
                </Label>
                <Input id="governate" name="governate" value={formData.governate} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">
                  {t("university")} <span className="text-red-500">*</span>
                </Label>
                <Input id="university" name="university" value={formData.university} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegramUsername">
                  {t("telegramUsername")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="telegramUsername"
                  name="telegramUsername"
                  value={formData.telegramUsername}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions">
                  {t("suggestions")} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="suggestions"
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                {isSubmitting && (
                  <svg className="animate-spin h-5 w-5 mr-2 inline text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                  </svg>
                )}
                {isSubmitting ? t("submitting") : t("registerButton")}
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">{t("privacyNotice")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
