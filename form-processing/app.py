from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    # Process the data
    return jsonify({"message": "Form submitted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
