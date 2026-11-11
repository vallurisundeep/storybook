Set up Powerlevel10k on this Mac to match a specific config from another machine:

1. Install Homebrew if it's not already installed.
2. Install Oh My Zsh if it's not already installed.
3. Install the powerlevel10k theme as an Oh My Zsh custom theme:
   git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
     ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
4. In ~/.zshrc, set ZSH_THEME="powerlevel10k/powerlevel10k" (replace whatever
   theme is currently set, e.g. "agnoster" or "robbyrussell").
5. Copy the theme's own "Rainbow" preset to ~/.p10k.zsh:
   cp ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k/config/p10k-rainbow.zsh ~/.p10k.zsh
6. Edit ~/.p10k.zsh with these exact changes:
   - In POWERLEVEL9K_LEFT_PROMPT_ELEMENTS, uncomment "# prompt_char" so the
     list reads: dir, vcs, newline, prompt_char (two-line prompt, no os_icon).
   - Set POWERLEVEL9K_DIR_BACKGROUND=33
   - Set POWERLEVEL9K_VCS_CLEAN_BACKGROUND=76
   - Set POWERLEVEL9K_VCS_MODIFIED_BACKGROUND=214
   - Set POWERLEVEL9K_VCS_UNTRACKED_BACKGROUND=76
   - Set POWERLEVEL9K_VCS_CONFLICTED_BACKGROUND=196
   - Set POWERLEVEL9K_VCS_LOADING_BACKGROUND=240
   (These use fixed 256-color-cube indices instead of basic ANSI 0-15 colors,
   so the colors stay consistent regardless of the Terminal profile's theme.)
7. Make sure ~/.zshrc sources it: [[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
8. Install a Nerd Font: brew install --cask font-meslo-lg-nerd-font
9. Set Terminal.app's active profile font to "MesloLGS NF" — find the
   Default/Startup Window Settings profile name via
   `defaults read com.apple.Terminal "Default Window Settings"`, then set its
   font with osascript, e.g.:
   osascript -e 'tell application "Terminal" to set font name of settings set "<PROFILE_NAME>" to "MesloLGS NF"'
10. Run `exec zsh` and confirm no errors.
