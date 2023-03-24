export default {
    async generate(builder, project, config) {
        const libev = project.createTarget('libev', 'LIBRARY')
            .addSource('ev.c')
            .addExportIncludeDirectory('.')
        if (await builder.tryCompileC('#include"dlfcn.h"\nvoid main(){}')) {
            libev.addDefinition('HAVE_DLFCN_H=1')
        }
        if (await builder.tryCompileC('#include"math.h"\nvoid main(){floor(0);}')) {
            libev.addDefinition('HAVE_FLOOR=1')
        }
        if (await builder.tryCompileC('#include"time.h"\nvoid main(){nanosleep(0,0);}')) {
            libev.addDefinition('HAVE_NANOSLEEP=1')
        }
        if (await builder.tryCompileC('#include"poll.h"\nvoid main(){poll(0,0,0);}')) {
            libev.addDefinition('HAVE_POLL_H=1')
            libev.addDefinition('HAVE_POLL=1')
        }
        if (await builder.tryCompileC('#include"port.h"\nvoid main(){port_create();}')) {
            libev.addDefinition('HAVE_PORT_H=1')
            libev.addDefinition('HAVE_PORT_CREATE=1')
        }
        if (await builder.tryCompileC('#include"time.h"\nvoid main(){clock_gettime(0,0);}')) {
            libev.addDefinition('HAVE_CLOCK_GETTIME=1')
        }
        if (await builder.tryCompileC('#include"linux/aio_abi.h"\nvoid main(){}')) {
            libev.addDefinition('HAVE_LINUX_AIO_ABI_H=1')
        }
        if (await builder.tryCompileC('#include"linux/fs.h"\nvoid main(){kernel_rwf_t a;}')) {
            libev.addDefinition('HAVE_LINUX_FS_H=1')
            libev.addDefinition('HAVE_KERNEL_RWF_T=1')
        }
        if (await builder.tryCompileC('#include"sys/epoll.h"\nvoid main(){epoll_ctl(0,0,0,0);}')) {
            libev.addDefinition('HAVE_SYS_EPOLL_H=1')
            libev.addDefinition('HAVE_EPOLL_CTL=1')
        }
        if (await builder.tryCompileC('#include"sys/event.h"\nvoid main(){kqueue();}')) {
            libev.addDefinition('HAVE_SYS_EVENT_H=1')
            libev.addDefinition('HAVE_KQUEUE=1')
        }
        if (await builder.tryCompileC('#include"sys/eventfd.h"\nvoid main(){eventfd(0,0);}')) {
            libev.addDefinition('HAVE_EVENTFD=1')
        }
        if (await builder.tryCompileC('#include"sys/inotify.h"\nvoid main(){inotify_init();}')) {
            libev.addDefinition('HAVE_SYS_INOTIFY_H=1')
            libev.addDefinition('HAVE_INOTIFY_INIT=1')
        }
        if (await builder.tryCompileC('#include"sys/select.h"\nvoid main(){select(0,0,0,0,0);}')) {
            libev.addDefinition('HAVE_SYS_SELECT_H=1')
            libev.addDefinition('HAVE_SELECT=1')
        }
        if (await builder.tryCompileC('#include"sys/signalfd.h"\nvoid main(){signalfd(0,0,0);}')) {
            libev.addDefinition('HAVE_SYS_SIGNALFD_H=1')
            libev.addDefinition('HAVE_SIGNALFD=1')
        }
        if (await builder.tryCompileC('#include"sys/syscall.h"\nvoid main(){syscall(SYS_clock_gettime,0,0);}')) {
            libev.addDefinition('HAVE_CLOCK_SYSCALL=1')
        }
        if (await builder.tryCompileC('#include"sys/timerfd.h"\nvoid main(){}')) {
            libev.addDefinition('HAVE_SYS_TIMERFD_H=1')
        }
    }
}
