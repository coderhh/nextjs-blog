import { parseISO, format } from 'date-fns';
import React from 'react';
/**
 *
 * @return { JSX.Element}
 */
export default function Date({
  dateString,
}: {
  dateString: string;
}): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
