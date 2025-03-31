/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export function percentageToHex(percentage: number) {
  return `0${Math.floor((percentage * 255) / 100).toString(16)}`.slice(-2).toUpperCase()
}

// Note: Chakra UI's system.token API can be used to access token values and CSS variables,

/*
import { defaultSystem as system } from "@chakra-ui/react";

// raw token
system.token("colors.red.200");
// => "#EE0F0F"

// css variable
system.token.var("colors.red.200");
// => "var(--chakra-colors-red-200)"

// semantic token
system.token("colors.danger");
// => "var(--chakra-colors-danger)"

system.token.var("colors.danger");
// => "var(--chakra-colors-danger)"

system.tokens.getVar("colors.red.200");

system.tokens.expandReferenceInValue("3px solid {colors.red.200}");
// => "3px solid var(--chakra-colors-red-200)"
*/
