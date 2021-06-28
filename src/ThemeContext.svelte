<script lang="ts">
    import { setContext, onMount } from "svelte";
    import { writable } from "svelte/store";
    import { presets} from "./presets";
    import type { Preset } from "./presets";

    let _current = presets[0].name;
    const getCurrentTheme = name => presets.find(h => h.name === name);
    const Theme = writable(getCurrentTheme(_current));
  
    setContext("theme", {
      // providing Theme store through context makes store readonly
      theme: Theme,
      toggle: () => {
        // update internal state
        let _currentIndex = presets.findIndex(h => h.name === _current);
        _current =
          presets[_currentIndex === presets.length - 1 ? 0 : (_currentIndex += 1)]
            .name;
        // update Theme store
        Theme.update(t => ({ ...t, ...getCurrentTheme(_current) }));
        setRootColors(getCurrentTheme(_current));
      }
    });
  
    onMount(() => {
      setRootColors(getCurrentTheme(_current));
    });
  
    // sets CSS vars for easy use in components
    // ex: var(--theme-background)
    const setRootColors = (theme: Preset) => {
      for (let [prop, color] of Object.entries(theme.colors)) {
        let varString = `--theme-${prop}`;
        document.documentElement.style.setProperty(varString, color);
      }
      document.documentElement.style.setProperty("--theme-name", theme.name);
    };
  </script>
  
  <slot>
    <!-- content will go here -->
  </slot>