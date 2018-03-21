---
title: dotfiles 101 - bash
excerpt: There are a bunch of different shell options to choose from these days, but for me, bash has always been enough, however it needs a little config to be fully to my liking.
tags: ['tech']
date: 2014-04-14 23:33:38
---

This article is part of a series; the topics covered in this article might not
make all that much sense without reading the first part, so feel free to [check
it out here]({% post_url 2014-04-12-dotfiles-101 %}).

In this part of the series, we'll be exploring `bash` a bit more, trying to
create a basic prompt which will contain some practical information. So without
further ado, let's dig in!

## Hello, bash

When you crank open your terminal, you will -- as a default on most systems --
be launched into a shell environment called `bash`. Since this is an interface
to your machine it's nice to have a prompt that actually provides you some
relevant information.

The default prompt actually differs depending on your operating system. On OS X
for example, it only gives you the name of the directory you're in, not the full
path; personally I much prefer knowing **exactly** where I am on my system,
rather than just some directory name.

To update the prompt, you change the `PS1` variable. In order not to have to
export the `PS1` variable every time you open a terminal, we'll make it
a permanent change by adding it in the `.bashrc` file we created in the previous
article.

Go on and crank open your favourite editor (vim! ;D) and edit the
`.dotfiles/.bashrc` file, putting in the following contents:

```bash
c='4'
PS1='\n\[\e[0;3${c}m\]\u\[\e[0m\] @ \[\e[1;3${c}m\]\h\[\e[0m\] \[\e[1;36m\]\w\[\e[0m\] \n\$ '
```

I know this looks like a whole bunch of gibberish, but that's simply what the
syntax for the `PS1` looks like.

The above string will add some colour to your prompt and give you some relevant
information; namely your username, the hostname and the full path of the
directory you're currently in.

The reason I like to assign the colour as a variable, is so it can be changed
based on the hostname. For an example of this you can view [my bashrc][bashrc].

I started using per-host colouring because \***cough**\* I may or may not have
broken a production site at some point thinking I was working in a testing
environment -- this immediately demonstrates how helpful it can be to properly
configure your shit.

So, there we go -- we have a basic git prompt which will be useful to us, but
there's many more possibilities. If you want to experiment a bit more there's a
whole lot more variables available for use in your prompt; for a comprehensive
list, check out [this article][bash-variables].


## Danger lurks

There's one addition that I personally really like, which is to show the branch
I am currently on in git repositories. This again stems from me being stupid and
accidentally committing straight to the `stable` branch of a project when I was
supposed to be working on `unstable`. Oops.

Mistakes can be harsh, but they have a way of never allowing you to forget, thus
ensuring it'll never (or at least rarely) happen again.

Luckily for us there are a few helper scripts which can be found in the
[`contrib/completion`][git-completion] directory inside git's core repository.
These scripts were made specifically for this purpose.

Besides the script we'll need to complete our prompt, there's also a script
which helps with tab-completion. This covers git commands, flags, branch
names... everything! So, aside from the prompt stuff we'll also go ahead and
copy the completion over.

First, let's copy the required files over to our dotfiles:

```bash
$ cd ~/.dotfiles
$ curl -O https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
$ curl -O https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
```

Then we'll want to source these files from our `.bashrc`, so go ahead and open
up your editor, adding the following lines above the `PS1` assignment:

```bash
source ~/.dotfiles/git-completion.bash
source ~/.dotfiles/git-prompt.sh
```

At this point, your git completion should already be working since the script
takes care of the rest, for the prompt we'll need to do one more thing: amend
our original `PS1` assignment.

```bash
PS1='\n\[\e[0;3${c}m\]\u\[\e[0m\] @ \[\e[1;3${c}m\]\h\[\e[0m\] \[\e[1;36m\]\w\[\e[0m\] $(__git_ps1) \n\$ '
```

As you can see, we have added `$(__git_ps1)`. This will basically execute the
`__git_ps1` function, exposed by the `git-prompt.sh` script, every time the
prompt is displayed.

On top of showing you the name of the branch you're on, there are also some
flags available which will enhance the output of `__git_ps1` even further.
The full list of options can be found in the comments at the top of the
[`git-prompt.sh`][git-prompt] script, but I'll touch on the ones I use:

- `GIT_PS1_SHOWDIRTYSTATE`, which shows whether you have changes in your working
  tree, and
- `GIT_PS1_SHOWUPSTREAM`, which shows the state of your branch compared to its
  upstream

You can enable these by adding them to your `.bashrc`. I doubt it matters where
you put them since they get evaluated whenever a prompt is displayed, so I've
simply put them directly below the `source`-ing of the scripts, which seems to
work:

```bash
export GIT_PS1_SHOWDIRTYSTATE=true
export GIT_PS1_SHOWUPSTREAM='auto'
```

I'll leave it up to you to look at the other flags and their possible values
since it ultimately comes down to personal preference.


## My name is... wait, what was it again?

Ahh, aliases... where would be without them? To tell you the truth, I actually
only have one alias in bash: `l`.

A lot of the time when working in a terminal you're looking at and manipulating
files. I like to see all the properties of my files so I made a single-letter
alias for listing files; here it is in all its glory:

```bash
alias l='ls -AFhl --color=always'
```

The only problem with this is that the implementation of `ls` varies between
distros. I used to work mostly on OS X, where the `--color` flag does not work.
To remedy this, I looked around a bit and came up with this override:

```bash
if [ `uname` = 'Darwin' ]; then
  export CLICOLOR=1
  export LSCOLORS=ExGxcxdxCxegedabagacad
  alias l='ls -AFhl'
fi
```

Maybe there's a better way of checking whether `ls` supports the `--color` flag,
but checking the OS worked for me and it preserves the original `l` using the
`--color` flag where possible.


## vim all the things

Finally, there are a lot of programs which look at the `EDITOR` variable to
determine which editor they should fire up. Let's make sure that it uses our
favourite editor -- `vim`!

```bash
export EDITOR='vim'
```

You can chuck this anywhere inside your `.bashrc` actually, but I just keep it
at the top.

## To sum it all up

Well then, that brings us to the end of customising our `bash` environment. If
you followed all the steps, your `.bashrc` should look something like this:

```bash
export EDITOR='vim'

alias l='ls -AFhl --color=always'

if [ `uname` = 'Darwin' ]; then
  export CLICOLOR=1
  export LSCOLORS=ExGxcxdxCxegedabagacad
  alias l='ls -AFhl'
fi

source ~/.dotfiles/git-completion.bash
source ~/.dotfiles/git-prompt.sh
export GIT_PS1_SHOWDIRTYSTATE=true
export GIT_PS1_SHOWUPSTREAM='auto'

c='4'
PS1='\n\[\e[0;3${c}m\]\u\[\e[0m\] @ \[\e[1;3${c}m\]\h\[\e[0m\] \[\e[1;36m\]\w\[\e[0m\] $(__git_ps1) \n\$ '
```

Of course you can make your `bash` configuration as basic or complicated as you
want, but these basics should at least give you a good starting point. As
pointed out in the previous article, there are a LOT of `dotfiles` out there on
the web (especially places like github) so it should be fairly trivial to find
some inspiration.

Thanks for reading and until next time, when we'll tackle `git`.

`:wq`

`:e`: The next article in the series is (finally) out. Read it
[here]({% post_url 2014-08-16-dotfiles-101-git %}).

[bashrc]: https://github.com/chielkunkels/dotfiles/blob/master/.bashrc
[bash-variables]: http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html
[git-completion]: https://github.com/git/git/tree/master/contrib/completion
[git-prompt]: https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
