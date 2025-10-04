// src/utils/apiClient.ts
const API_BASE = (import.meta as any).env.VITE_BACKEND_URL || '/';

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const url = path.startsWith('http') ? path : `${API_BASE.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;
  const defaultHeaders: HeadersInit = { 'Content-Type': 'application/json' };
  const merged: RequestInit = {
    credentials: 'include',
    headers: { ...defaultHeaders, ...(opts.headers || {}) },
    ...opts
  };

  if (merged.body && typeof merged.body !== 'string') {
    merged.body = JSON.stringify(merged.body);
  }

  const res = await fetch(url, merged);
  const text = await res.text();
  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');

  if (!res.ok) {
    // try to return parsed error, otherwise generic
    let parsed;
    try { parsed = isJson ? JSON.parse(text) : text; } catch (e) { parsed = text; }
    throw new Error(parsed?.message || `Request failed with status ${res.status}`);
  }

  return isJson && text ? JSON.parse(text) : (text as unknown as T);
}

export { API_BASE, request };
