import csv
import time

import requests
from bs4 import BeautifulSoup


# -----------------------------------------------------------------------------|
def main():
    """

    """
    with open('corncob_lowercase.txt', 'r') as f:
        words = f.readlines()

    query = {'title': 'Wiktionary:International Phonetic Alphabet'}

    with open('ipa_dict.csv', 'w') as csv_file:
        writer = csv.writer(csv_file, delimiter = '\t')
        writer.writerow(['IPA', 'word'])

    buffer = 1000
    for i in range(0, len(words), buffer):
        ipa_dict = {}
        for word in words[i: min(i+buffer, len(words))]:
            word = word.strip()
            html = requests.get('https://en.wiktionary.org/wiki/' + word).text
            soup = BeautifulSoup(html, 'html.parser')

            for ipa_title in soup.find_all(attrs = query):
                span_ipa_tag = ipa_title.find_next_sibling('span')
                if span_ipa_tag:
                    ipa = span_ipa_tag.text
                    ipa_dict[ipa] = word

        with open('ipa_dict.csv', 'a') as csv_file:
            writer = csv.writer(csv_file, delimiter='\t')
            for key, value in ipa_dict.items():
                writer.writerow([key, value])

        time.sleep(5)

# -----------------------------------------------------------------------------|


if __name__ == '__main__':
    main()
