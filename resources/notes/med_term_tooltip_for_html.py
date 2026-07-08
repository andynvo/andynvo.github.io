"""
Search and implement definition tooltips for medical terms in HTML file

Description: Search through HTML file for terms that exist within a dictionary (JSON file), implement text replace to make the term trigger tooltip containing definition

Author: Andy N. Vo (Github: andynvo)

Last modified: Jan 7, 2025      version: 0.1

"""

import string
import json
import sys
import fileinput

# Function to search & replace medical terms with appropriate enclosing <span> for tooltip
def search_and_replace_text(text, search_terms):
	words = text.split()
	new_words = []
	for word in words:
		if any(char in string.punctuation for char in word):
			m_word = word[:-1]
			punc = word[-1]
			if m_word.lower() in search_terms:
				x = f"<span class=\"tooltip-term\" data-term=\"{m_word.lower()}\">{m_word}</span>{punc}"
			else:
				x = word
		else:
			if word.lower() in search_terms:
				x = f"<span class=\"tooltip-term\" data-term=\"{word.lower()}\">{word}</span>"
			else:
				x = word
		new_words.append(x)
	new_text = " ".join(new_words)
	return new_text

# Declare variables (ONLY EDIT THIS REGION OF CODE)
dictionary = "dictionary.json"
text_filepath = "adv_medical_science/"
text_filename = "sx_to_dx.html"
text_file = text_filepath + text_filename

# Get list of medical terms from dictionary
try:
	with open(dictionary, 'r') as file:
		data = json.load(file)
	terms = list(data.keys())
except FileNotFoundError:
	print("Error: The file {dictionary} was not found.")
except json.JSONDecodeError:
	print("Error: Could not decode JSON from the file. Check for valid JSON syntax (e.g., use double quotes for keys/strings).")

# Open the file in in-place mode with a backup extension
with fileinput.FileInput(text_file, inplace=True, backup='.bak') as file:
	for line in file:
		# Replace the text in each line and print out to stdout (which rewrites the file)
		sys.stdout.write(search_and_replace_text(line, terms))
print(f"Text replaced in {text_filename}. Original file backed up as {text_filename}.bak")