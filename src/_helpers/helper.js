export const formatMembers = members => {
  const formated = members.map(member => {
    if (member.payment == null) {
      member.payment = 'No pay rate / No bill rate'
    }
    if (member.limits.daily == null) {
      member.limits.daily = 'No daily limit'
    }
    if (typeof member.limits.daily === 'number') {
      member.limits.daily = member.limits.daily.toFixed(2) + ' / day'
    }
    if (member.limits.weekly == null) {
      member.limits.weekly = 'No weekly limit'
    }
    if (typeof member.limits.weekly === 'number') {
      member.limits.weekly = member.limits.weekly.toFixed(2) + ' / week'
    }
    return member
  })
  return formated
}
export const removeDuplicates = arr => {
  return [...new Set(arr)]
}
