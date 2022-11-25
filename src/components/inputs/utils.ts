import { useMemo } from 'react';

export function generateId () {
  return Math.random()
    .toString(36)
    .slice(2);
}

export function useRandomId () {
  return useMemo(
    generateId,
    [],
  );
}
