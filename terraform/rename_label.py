import json
import subprocess
import sys


def label_resource(repo, label):
    return f'module.repo["{repo}"].github_issue_label.labels["{label}"]'


def get_repos():
    outputs = json.loads(subprocess.check_output(["terraform", "output", "-json"]))
    return outputs["active_repos"]["value"]


before = sys.argv[1]
after = sys.argv[2]

for repo in get_repos():
    cmd = f"terraform state mv '{label_resource(repo, before)}' '{label_resource(repo, after)}'"
    print(cmd)
