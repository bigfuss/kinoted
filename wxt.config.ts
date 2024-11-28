import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtyTFdVlGcyO6xqQBpw6c9ljQgCdpPknmYSt6oXotuq9D2mGwmqCJUmQuoevCJo2le1CLhpeN/HsStYip8jmLLsJGyaDmTllS1p3ISZ5/PuOD0MKUinOjK75iuQkilOJDwLzJ831uUyJrL/2hHeb6dl9aDtRmzpW1StjV/ZA1+m0ZYS8NFvTlBV91+AzrlBFmtt7HnVV11tZK+tez60Of60AaTOpthm3oG9WL6xUs8fyjGuxmNq1yZoQ4mA2uvJDsqkWLIQI+rpdSFY57jXKeSqQEtRJXBSrc7CE/7om9yHtEfPd+2/sXieAvuskmKawDYWgMrM6LrjOw/Y0fDx5LowIDAQAB", permissions: ["aiLanguageModelOriginTrial"], trial_tokens: ["AhUXKJVZb8HrNSRIhqXWBKyUZDg+b7dS//EOjfEDqW+51B5MLU6SJRiFu8s1Km+868IMK24UWGFAxcTCgrAVfwUAAAB4eyJvcmlnaW4iOiJjaHJvbWUtZXh0ZW5zaW9uOi8vYWlrbG1vbGNvZnBpbGtiZGhvZmhsaGptZ2NmYWhqbmciLCJmZWF0dXJlIjoiQUlQcm9tcHRBUElGb3JFeHRlbnNpb24iLCJleHBpcnkiOjE3NjA0ODYzOTl9"]}
});
