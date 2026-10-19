// Retries do provedor chegam com espaço no fim ou com caracteres invisíveis
// (zero width space etc.); a chave precisa ser a mesma da primeira tentativa.
const INVISIBLE = /[​-‍⁠﻿]/g;

export function normalizeKey(key: string): string {
  return key.replace(INVISIBLE, "").trim().toLowerCase();
}
