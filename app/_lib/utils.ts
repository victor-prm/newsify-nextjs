export function getShortestText(text1: string, text2?: string): string {
    let main_text = text1;
    if (text2 && text2.length < main_text.length) {
        main_text = text2;
    }
    return main_text;
}

export function dateStartLimit(): string {
    const today = new Date();
    const aWeekAgo = new Date();
    aWeekAgo.setDate(today.getDate() - 7);

    const formatDate = (date: Date): string =>
        date.toISOString().slice(0, 10).replace(/-/g, '');

    const beginDate = formatDate(aWeekAgo);

    return beginDate;
}

export function formatDate(date: string): string {
  const dateObj = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObj.toLocaleDateString("en-US", options);
}