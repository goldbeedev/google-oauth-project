export const formatDateString = (date: string) => {
    return new Date(Date.parse(date)).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    })
}