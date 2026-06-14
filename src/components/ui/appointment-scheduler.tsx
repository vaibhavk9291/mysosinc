"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Globe, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TimeSlot {
  time: string
  available: boolean
}

interface AvailableDate {
  date: number
  hasSlots: boolean
}

export interface AppointmentSchedulerProps {
  userName: string
  userAvatar?: string
  meetingTitle: string
  meetingType: string
  duration: string
  timezone: string
  availableDates: AvailableDate[]
  timeSlots: TimeSlot[]
  onDateSelect?: (date: number) => void
  onTimeSelect?: (time: string) => void
  onTimezoneChange?: (timezone: string) => void
  brandName?: string
}

export function AppointmentScheduler({
  userName,
  userAvatar,
  meetingTitle,
  meetingType,
  duration,
  timezone,
  availableDates,
  timeSlots,
  onDateSelect,
  onTimeSelect,
  onTimezoneChange,
  brandName = "Cal.com",
}: AppointmentSchedulerProps) {
  const now = new Date()
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())
  const [currentYear, setCurrentYear] = useState(now.getFullYear())
  const [selectedDate, setSelectedDate] = useState(15)
  const [selectedTime, setSelectedTime] = useState("15:30")
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleDateClick = (date: number) => {
    const isAvailable = availableDates.find((d) => d.date === date && d.hasSlots)
    if (isAvailable) {
      setSelectedDate(date)
      onDateSelect?.(date)
    }
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    onTimeSelect?.(time)
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)

  const calendarDays = []
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i)
  }

  const getSelectedDayName = () => {
    const date = new Date(currentYear, currentMonth, selectedDate)
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  const getSelectedDateFormatted = () => {
    const date = new Date(currentYear, currentMonth, selectedDate)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const formatTime = (time: string) => {
    if (timeFormat === "24h") return time

    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12
    return `${hour12}:${minutes} ${ampm}`
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-0 rounded-xl border border-brand-navy/10 bg-white overflow-hidden shadow-2xl">
      {/* Left Panel - Meeting Info */}
      <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-brand-navy/10 bg-brand-light p-6 space-y-6">
        <div className="flex items-center gap-3 animate-fade-in">
          <Avatar className="h-10 w-10 border border-brand-navy/10">
            <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
            <AvatarFallback className="bg-brand-teal text-white">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-brand-navy font-semibold">{userName}</span>
        </div>

        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-brand-navy">{meetingTitle}</h2>

          <div className="space-y-3 text-sm text-brand-text/70">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-brand-teal" />
              <span>{meetingType}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-teal" />
              <span>{duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-brand-teal" />
              <button
                className="flex items-center gap-1 hover:text-brand-navy transition-colors"
                onClick={() => onTimezoneChange?.(timezone)}
              >
                <span>{timezone}</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Center Panel - Calendar */}
      <div className="flex-1 p-4 md:p-6 bg-white">
        <div className="space-y-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between animate-fade-in">
            <h3 className="text-lg font-bold text-brand-navy">
              {monthNames[currentMonth]} <span className="text-brand-text/70 font-medium">{currentYear}</span>
            </h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-brand-light text-brand-navy" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-brand-light text-brand-navy" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day Headers */}
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs font-bold text-brand-text/60 py-2">
                {day}
              </div>
            ))}

            {/* Calendar Days */}
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />
              }

              const isAvailable = availableDates.find((d) => d.date === day && d.hasSlots)
              const isSelected = day === selectedDate
              const hasIndicator = isAvailable && !isSelected

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  disabled={!isAvailable}
                  className={cn(
                    "relative h-12 rounded-lg text-sm font-bold transition-all duration-200",
                    "hover:scale-105 active:scale-95",
                    isSelected && "bg-brand-teal text-white shadow-lg scale-105",
                    !isSelected && isAvailable && "bg-brand-light text-brand-navy hover:bg-gray-200",
                    !isAvailable && "text-brand-text/30 cursor-not-allowed",
                    "animate-fade-in",
                  )}
                >
                  {day}
                  {hasIndicator && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-teal" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Right Panel - Time Slots */}
      <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-brand-navy/10 bg-brand-light p-6 flex flex-col">
        <div className="flex items-center justify-between animate-fade-in mb-4">
          <div className="text-sm">
            <span className="font-bold text-brand-navy">{getSelectedDayName()}</span>
            <span className="text-brand-text/70">, {getSelectedDateFormatted()}</span>
          </div>
          <div className="flex gap-1 rounded-lg bg-gray-200 p-1">
            <button
              onClick={() => setTimeFormat("12h")}
              className={cn(
                "px-2 py-1 text-xs font-bold rounded transition-colors",
                timeFormat === "12h" ? "bg-white text-brand-navy shadow-sm" : "text-brand-text/60 hover:text-brand-navy",
              )}
            >
              12h
            </button>
            <button
              onClick={() => setTimeFormat("24h")}
              className={cn(
                "px-2 py-1 text-xs font-bold rounded transition-colors",
                timeFormat === "24h" ? "bg-white text-brand-navy shadow-sm" : "text-brand-text/60 hover:text-brand-navy",
              )}
            >
              24h
            </button>
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-2 overflow-y-auto pr-2 scrollbar-thin max-h-[400px] lg:max-h-[500px]">
          {timeSlots.map((slot) => {
            const isSelected = slot.time === selectedTime
            return (
              <button
                key={slot.time}
                onClick={() => handleTimeClick(slot.time)}
                disabled={!slot.available}
                className={cn(
                  "w-full py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  isSelected && "bg-brand-navy text-white shadow-lg scale-[1.02]",
                  !isSelected && slot.available && "bg-white border border-brand-navy/10 text-brand-navy hover:bg-gray-50",
                  !slot.available && "bg-white border border-brand-navy/5 text-brand-text/30 cursor-not-allowed",
                  "animate-fade-in",
                )}
              >
                {formatTime(slot.time)}
              </button>
            )
          })}
        </div>

        <div className="pt-4 mt-4 border-t border-brand-navy/10 animate-fade-in">
          <p className="text-xs text-brand-text/50 font-medium text-right">powered by <span className="font-bold text-brand-navy">{brandName}</span></p>
        </div>
      </div>
    </div>
  )
}
