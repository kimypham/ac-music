import { PropsWithChildren } from 'react';

interface ISettingsGroupProps extends PropsWithChildren<{}> {
    title: string;
};

export const VideoSettingsGroup = ({ title, children }: ISettingsGroupProps) => (
    <div className='mb-[30px]'>
        <p>{title}</p>
        <div className="flex gap-[10px] text-[14px] mt-[14px] justify-center">
            {children}
        </div>
    </div>
);