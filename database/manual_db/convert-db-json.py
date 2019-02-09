import json

# -----------------------------------------------------------------------------|
def main():
    """

    """

    with open("remaining-db") as f:
        entries = f.readlines()

    _json = {}
    for entry in entries:
        ch, examples = entry.split('\t')
        examples = examples.strip().split(", ")
        _json[ch] = [{"word": example, "indices": []}
                     for example in examples]

    with open('remaining.json', 'w') as outfile:
        json.dump(_json, outfile)
# -----------------------------------------------------------------------------|


if __name__ == '__main__':
    main()
