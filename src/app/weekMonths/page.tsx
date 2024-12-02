import WeekMonthsCard from '@/components/weekMonthsCard'
import sortWeekMonths from '@/functions/sortWeekMonths'

export default function WeekMonths() {
  console.log(sortWeekMonths({}))
  return <WeekMonthsCard />
}
