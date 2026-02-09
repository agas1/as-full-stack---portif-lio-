'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Command {
  command: string;
  output?: string[];
  delay: number;
}

const commands: Command[] = [
  {
    command: 'git status',
    output: ['On branch main', 'Your branch is up to date with \'origin/main\'.', 'nothing to commit, working tree clean'],
    delay: 0,
  },
  {
    command: 'npm run dev',
    output: ['> next dev', '- ready started server on 0.0.0.0:3000', '✓ Compiled successfully'],
    delay: 3000,
  },
  {
    command: 'git add .',
    delay: 6000,
  },
  {
    command: 'git commit -m "feat: implement new feature"',
    output: ['[main a1b2c3d] feat: implement new feature', '3 files changed, 127 insertions(+), 12 deletions(-)'],
    delay: 7000,
  },
  {
    command: 'npm run build',
    output: ['> next build', '✓ Creating an optimized production build', '✓ Compiled successfully', '✓ Build completed'],
    delay: 10000,
  },
  {
    command: 'git push origin main',
    output: ['Enumerating objects: 8, done.', 'Counting objects: 100%', 'Writing objects: 100%', 'To github.com:agatha/project.git', '   abc123..def456  main -> main'],
    delay: 14000,
  },
];

export function Terminal() {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [typingCommand, setTypingCommand] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      // Reset and loop
      const timer = setTimeout(() => {
        setVisibleCommands(0);
        setCurrentCommandIndex(0);
        setTypingCommand('');
      }, 3000);
      return () => clearTimeout(timer);
    }

    const currentCommand = commands[currentCommandIndex];
    const timer = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= currentCommand.command.length) {
          setTypingCommand(currentCommand.command.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setVisibleCommands(prev => prev + 1);
          setTypingCommand('');
          setCurrentCommandIndex(prev => prev + 1);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, currentCommand.delay);

    return () => clearTimeout(timer);
  }, [currentCommandIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mx-auto px-4"
    >
      {/* Terminal Window */}
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-white/10">
        {/* Terminal Header */}
        <div className="bg-[#323233] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-white/10">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2 ml-2 sm:ml-4">
            <TerminalIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
            <span className="text-xs sm:text-sm text-white/60 font-mono hidden sm:inline">agatha@dev: ~/projects</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] overflow-y-auto">
          {commands.slice(0, visibleCommands).map((cmd, index) => (
            <div key={index} className="mb-4">
              {/* Command Line */}
              <div className="flex items-start gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~/projects</span>
                <span className="text-white/90">{cmd.command}</span>
              </div>

              {/* Output */}
              {cmd.output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 ml-2 space-y-1"
                >
                  {cmd.output.map((line, i) => (
                    <div key={i} className="text-white/70 text-xs">
                      {line}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Currently Typing Command */}
          {isTyping && (
            <div className="flex items-start gap-2">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">~/projects</span>
              <span className="text-white/90">
                {typingCommand}
                <span className="inline-block w-2 h-4 bg-white/70 ml-1 animate-pulse" />
              </span>
            </div>
          )}

          {/* Cursor when waiting */}
          {!isTyping && currentCommandIndex < commands.length && visibleCommands === currentCommandIndex && (
            <div className="flex items-start gap-2">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">~/projects</span>
              <span className="inline-block w-2 h-4 bg-white/70 ml-1 animate-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-white/60 text-sm mt-6 font-light"
      >
        Real workflow of a full stack developer • Building, testing, deploying
      </motion.p>
    </motion.div>
  );
}
