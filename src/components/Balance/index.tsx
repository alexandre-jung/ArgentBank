import localeCurrency from 'locale-currency';

interface BalanceProps {
  amountInCents: number;
  localeCode?: string;
}

/**
 * Provides a localized currency string, with its currency symbol.
 * @param amountInCents
 * @param {string} [localeCode] "en-US", "fr", ... Default: the browser locale
 * @returns React.Fragment
 */
export function Balance ({ amountInCents, localeCode }: BalanceProps) {
  const locale = localeCode ?? (
    navigator.languages && navigator.languages.length ?
      navigator.languages[0] :
      navigator.language
  );

  const currency = localeCurrency.getCurrency(locale);
  const options = { style: 'currency', currency };
  const formatter = new Intl.NumberFormat(locale, options);
  const formattedAmount = formatter.format(amountInCents / 100);

  return <>{formattedAmount}</>;
}
