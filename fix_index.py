"""
Fix the corrupted index.html by restoring the tab buttons section
"""

# Read the current broken file
with open("c:/Users/quazi/Downloads/Block-3-Summaries/index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find the broken section and replace it
broken_section = '''                \u003cdiv
                    class="flex border-b border-solarized-base1/20 dark:border-dark-border bg-solarized-base2/30 dark:bg-dark-surface/30 px-8 font-sans"\u003e
                    \u003cbutton \u003cdiv id="tableOfContents"
                        class="hidden w-64 p-6 border-r border-solarized-base1/10 dark:border-dark-border"\u003e
                \u003c/div\u003e
                \u003cdiv id="tabContent" class="flex-1 p-8"\u003e\u003c/div\u003e
            \u003c/div\u003e'''

fixed_section = '''                \u003cdiv
                    class="flex border-b border-solarized-base1/20 dark:border-dark-border bg-solarized-base2/30 dark:bg-dark-surface/30 px-8 font-sans"\u003e
                    \u003cbutton
                        class="tab-btn px-6 py-4 font-semibold text-sm border-b-2 border-solarized-blue dark:border-dark-accent text-solarized-blue dark:text-dark-accent transition-all duration-300"
                        data-tab="summary"\u003eSummary\u003c/button\u003e
                    \u003cbutton
                        class="tab-btn px-6 py-4 font-semibold text-sm border-b-2 border-transparent text-solarized-base1 dark:text-dark-muted hover:text-solarized-base00 dark:hover:text-dark-text transition-all duration-300"
                        data-tab="questions"\u003eQuestions\u003c/button\u003e
                    \u003cbutton
                        class="tab-btn px-6 py-4 font-semibold text-sm border-b-2 border-transparent text-solarized-base1 dark:text-dark-muted hover:text-solarized-base00 dark:hover:text-dark-text transition-all duration-300"
                        data-tab="glossary"\u003eGlossary\u003c/button\u003e
                    \u003cbutton
                        class="tab-btn px-6 py-4 font-semibold text-sm border-b-2 border-transparent text-solarized-base1 dark:text-dark-muted hover:text-solarized-base00 dark:hover:text-dark-text transition-all duration-300"
                        data-tab="mnemonics"\u003eMnemonics\u003c/button\u003e
                    \u003cbutton
                        class="tab-btn px-6 py-4 font-semibold text-sm border-b-2 border-transparent text-solarized-base1 dark:text-dark-muted hover:text-solarized-base00 dark:hover:text-dark-text transition-all duration-300"
                        data-tab="high-yield"\u003eHigh Yield\u003c/button\u003e
                \u003c/div\u003e

                \u003cdiv class="flex-1 overflow-y-auto" id="contentScroll"\u003e
                    \u003cdiv class="flex max-w-7xl mx-auto"\u003e
                        \u003cdiv id="tableOfContents"
                            class="hidden w-64 p-6 border-r border-solarized-base1/10 dark:border-dark-border"\u003e\u003c/div\u003e
                        \u003cdiv id="tabContent" class="flex-1 p-8"\u003e\u003c/div\u003e
                    \u003c/div\u003e
                \u003c/div\u003e'''

# Replace the broken section
content = content.replace(broken_section, fixed_section)

# Write the fixed content back
with open("c:/Users/quazi/Downloads/Block-3-Summaries/index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed index.html - restored tab buttons and content structure")
