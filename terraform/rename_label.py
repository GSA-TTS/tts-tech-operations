import json
import subprocess
import sys

outputs = json.loads(subprocess.check_output(["terraform", "output", "-json"]))
repos = outputs["active_repos"]["value"]

before = sys.argv[1]
after = sys.argv[2]

for repo in repos:
    cmd = f'terraform state mv \'module.repo["{repo}"].github_issue_label.labels["{before}"]\' \'module.repo["{repo}"].github_issue_label.labels["{after}"]\''
    print(cmd)
